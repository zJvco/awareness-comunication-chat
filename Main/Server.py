import threading
import socket

clients = []


class Server:
    def __init__(self):
        self.server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

        try:
            self.server.bind(('localhost', 7777))
            self.server.listen()
        except:
            print('\nNão foi possível iniciar o servidor!\n')

        while True:
            client, addr = self.server.accept()
            clients.append(client)

            thread = threading.Thread(target=self.messagesTreatment, args=[client])
            thread.start()

    def deleteClient(client):
        clients.remove(client)

    def broadcast(msg, client):
        for clientItem in clients:
            if clientItem != client:
                try:
                    clientItem.send(msg)
                except:
                    self.deleteClient(clientItem)

    def messagesTreatment(client):
        while True:
            try:
                msg = client.recv(2048)
                self.broadcast(msg, client)
            except:
                self.deleteClient(client)
                break

server = Server()
