import sounddevice as sd
import threading
import numpy as np
import matplotlib.pyplot as plt
import socket


UNDER_RECORDING = 1
WAITING_FOR_TRANSMISSION = 2
DATA_TRANSMITTED = 3

def record(sound_recording_buffer, sound_buffer_status, fs):
	while True:
		for buffer_index in range(len(sound_recording_buffer)):
			while(sound_buffer_status[buffer_index] != DATA_TRANSMITTED):
				filler = 2
			sound_buffer_status[buffer_index] = UNDER_RECORDING
			sound_recording_buffer[buffer_index] = sd.rec(fs, fs, 1)
			sd.wait()
			sound_buffer_status[buffer_index] = WAITING_FOR_TRANSMISSION
	
buffer_size = 10
fs = 10000
sound_recording_buffer = [np.zeros(fs) for buffer_index in range(buffer_size)]
sound_buffer_status = [DATA_TRANSMITTED for buffer_index in range(buffer_size)]

recording_thread = threading.Thread(target=record, args=(sound_recording_buffer, sound_buffer_status, fs))
recording_thread.start()

while True:
	for buffer_index in range(buffer_size):
		while(sound_buffer_status[buffer_index] is not WAITING_FOR_TRANSMISSION):
			filler = 2
		#Code for sending data to server
		print("Packet buffer %d sent" % (buffer_index))
		#plt.plot(sound_recording_buffer[buffer_index])
		#plt.show()
		sound_buffer_status[buffer_index] = DATA_TRANSMITTED
		