from .extensions import sio


@sio.on("message")
def message(msg):
    sio.emit("message", msg)


# @sio.on("join")
# def connect(msg):
#     sio.emit("join", msg)