from .extensions import db


class User(db.Model):
    __tablename__ = "users"

    id = db.Column("id", db.Integer, primary_key=True)
    username = db.Column("username", db.String, nullable=False)
    email = db.Column("email", db.String, nullable=False, unique=True)
    password = db.Column("password", db.String, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.username