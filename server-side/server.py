import socket
import sys
#import WatsonSOS

s = socket.socket()
s.bind(("localhost", 8000))
s.listen(10) # Accepts up to 10 connections.

while True:
    sc, address = s.accept()

    print("Connection established: %s" % address)
    f = open("file.mp3",'wb') #open in binary
    while (True):       
    # receive data and write it to file
        l = sc.recv(1024)
        while (l):
                print("Stream: %s" % l)
                f.write(l)
                l = sc.recv(1024)
        print("Done Receiving\n\n")
        f.close()
        sc.sendall(byte("Protocol Response: GunEmergencyProtocol", "utf-8")

    
    #Emergency response and handling code
    
    #Gun Classification Function & Protocol Result
    #prob_result = WatsonSOS.classify(f)
    #protocol_result = WatsonSOS.protocolCheck(prob_result)

    #Send protocol result back to client
    #sc.sendall(byte("Protocol Response: %s" % protocol_result, "utf-8"))
    sc.close()
    
   

s.close()


