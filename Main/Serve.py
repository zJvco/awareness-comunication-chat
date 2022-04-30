import threading
import socket


class Serve:
    def __init__(self, socket):
        self.server = socket
        self.clients = []

        try:
            self.server.bind(('127.0.0.1', 7777))
            self.server.listen()
        except:
            print('\nNão foi possível iniciar o servidor!\n')

        while True:
            client, addr = self.server.accept()
            self.clients.append(client)

            thread = threading.Thread(target=self.messagesTreatment, args=[client])
            thread.start()

    def broadcast(self, msg, client):
        for clientItem in clients:
            if clientItem != client:
                try:
                    clientItem.send(msg)
                except:
                     clients.remove(client)
    
    def messagesTreatment(self, client):
        while True:
            try:
                msg = client.recv(2048)
                self.broadcast(msg, client)
            except:
                self.clients.remove(client)
                break


socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
serve = Serve(socket)
