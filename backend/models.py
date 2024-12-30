from .database import Base
from sqlalchemy import Column, String, Integer

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)  # Primary key with index
    name = Column(String(100), nullable=False)  # Name with a max length of 100
    email = Column(String(200), nullable=False, unique=True)  # Unique email
    password = Column(String(300), nullable=False)  # Password column
