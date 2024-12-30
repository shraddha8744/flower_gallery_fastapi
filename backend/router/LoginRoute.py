from fastapi import APIRouter,Depends,HTTPException,status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from ..database import get_db
from ..models import User
from  passlib.context import CryptContext
from ..JWTtoken import create_acess_token

login_router=APIRouter()

pwd_context=CryptContext(schemes=["bcrypt"], deprecated="auto")


@login_router.post("/login")
async def login(user:OAuth2PasswordRequestForm=Depends(),db:Session=Depends(get_db)):
    u=db.query(User).filter(User.email==user.username).first()
    if not u:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,detail="Invalid email")
    
    if not pwd_context.verify(user.password,u.password):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,detail="Invalid Password")
    
    acess_token=create_acess_token(data={"sub":u.email})

    return {"message":"Login Successfully","token":acess_token}
