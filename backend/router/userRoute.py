from fastapi import APIRouter, status, Depends, HTTPException
from ..schemas import userSchema, showUser
from ..models import User
from sqlalchemy.orm import Session
from ..database import get_db
from passlib.context import CryptContext

userRouter = APIRouter()

# Test route
@userRouter.get("/test")
def test():
    return {
        "success": True,
        "message": "Server started successfully",
    }

# Create first User
pwd_context=CryptContext(schemes=["bcrypt"], deprecated="auto")
@userRouter.post("/signup", status_code=status.HTTP_201_CREATED, response_model=showUser)
async def create_user(user_data: userSchema, db: Session = Depends(get_db)):
    # Check if user already exists
    exist_user = db.query(User).filter(User.email == user_data.email).first()
    if exist_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, detail="User already exists"
        )

    # Create a new user instance
    hash_password=pwd_context.hash(user_data.password)
    new_user = User(
        name=user_data.name,
        email=user_data.email,
        password=hash_password,
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    # Return the created user (excluding password)
    return new_user
