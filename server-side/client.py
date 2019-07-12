import socket
import sys

HOST, PORT = "localhost", 8000
filename = sys.argv[1]

# Create a socket (SOCK_STREAM means a TCP socket)
sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

try:
    # Connect to server and send data
    sock.connect((HOST, PORT))
    
    
    f = open(filename,'rb')
    l = f.read(1024)
    while (l):
       sock.send(l)
       print('Sent ',repr(l))
       l = f.read(1024)
    f.close()

    print('Done sending')
    sock.send(bytes('Thank you for connecting', "utf-8"))
    
    # Receive data from the server and shut down
    received = str(sock.recv(1024), "utf-8")
finally:
    sock.close()

print("Sent:     {}".format(data))
print("Received: {}".format(received))
