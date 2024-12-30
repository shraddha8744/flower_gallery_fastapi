from pydantic import BaseModel,Field
from typing import Optional


class userSchema(BaseModel):
    id: Optional[int] = Field(None, description="ID will be auto-generated")
    name:str
    email:str
    password:str

class showUser(BaseModel):
    id:int
    name:str
    email:str
    class Config():
        orm_mode=True  

class Login(BaseModel):
    email:str
    password:str

class Token(BaseModel):
    access_token:str
    token_type:str

class TokenData(BaseModel):
    email:Optional[str]=None                  
    