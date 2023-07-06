import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

    .home-page{        
	background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
	animation: gradient 15s ease infinite;
	height: 100vh;
    
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
    
}
    &>.container{
        margin: auto;
        position: relative;
        top: 70px;
        width: 37%;
        box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.3);
        filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
        border-radius: 17px;
        padding: 17px;
        display: flex;
        flex-direction: column;
        gap: 37px;


        .css-a5mhaz{
            padding: 0px;
        }

        &>.login-button{
            display: flex;
            border-bottom:none;

            &>button{
                font-weight: bold;
                width: 50%;
            }
            &>.css-1mbanyi{
                border-radius: 10px;
            }
        }

        .input-fields{
            display: flex;
            flex-direction: column;
            gap: 20px;

            
        .buttons{
            display: flex;
            justify-content: space-around;
            align-items: center;

            .btn{
                background: #ffffff14 ;
                width: 40%;
            }
        }
        }


        .input-fields2{
                display: flex;
                flex-direction: column;
                gap: 7px;

            .buttons{
                display: flex;
                justify-content: space-around;
                align-items: center;
    
                .btn{
                    background: #ffffff14 ;
                    width: 40%;
                }
            }
            .css-j6wcg0{
                padding: 4.2px;
            } 
        }

    }
}

    .chat-page{        
        background: linear-gradient(-30deg,  #dde1e7, rgba(6, 42, 124, 0.384));
        height: 100vh;

        @keyframes gradient {
        50% {
            background-position: 100% 50%;
        }
        }

        &>.chat-container{
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;


        &>.left-section{
            width: 100%;
            height: 100vh;
            box-shadow: -10px -10px 15px rgba(255,255,255,0.5),
            10px 10px 15px rgba(100,100,100,0.10);
            padding: 20px 0px 20px 20px;
            display: flex;
            flex-direction: column;
            overflow: auto;
            gap: 37px;

            ::-webkit-scrollbar{
                display: none;
            }



            &>.avatar{
                display: flex;
                gap: 17px;
                text-align: center;
            }

            .users-avatar{
                display: flex;
                flex-direction: column;
                gap: 37px;
            }
            .avatar-container{
                align-items: center;
                gap: 17px;
                display: flex;
            }

        }

        &>.mid-section{
            padding: 20px 25px;
            
            
            &>.chat-header{
                padding: 15px;
                &>div{
                    padding: 3px;
                    border-radius: 33px;
                    margin: auto;
                    background: #e4ebf1;
                    width: 70%;
                    display: flex;
                    gap: 30px;
                    align-items: center;
                }
            }

            &>.chat-div{
                height: 410px;
                overflow: scroll;
                
                ::-webkit-scrollbar{
                    display: none;
                }
                
                
                .sender{
                    filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.3));
                    background: #f3f3f3;
                    padding: 3px;
                    width: 45%;
                    border-top-left-radius:15px ;
                    border-bottom-right-radius:15px ;
                }
                
                .reciever{
                    margin: 0 0 0 auto;
                    background: #236eef;
                    padding: 3px;
                    width: 45%;
                    border-top-left-radius:15px;
                    border-bottom-right-radius:15px ;
                }
            }
            
            &>.chat-footer{
                padding: 10px;
                width: 100%;
                background: #22568a;
                border-top-left-radius:15px;
                border-bottom-right-radius:15px ;
                
                &>div{
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    justify-content: space-evenly;
                }
                .chat-icons{
                    gap: 10px;
                    display: flex;

                    &>:nth-child(1){
                        cursor: pointer;
                    }
                    &>:nth-child(2){
                        cursor: pointer;
                    }
                }
            }
        }
    }

    span{
        text-transform: capitalize;
        font-size: large;
        font-weight: bold;
    }
    h5{
        text-transform: capitalize;
        font-weight: bold;
    }

}

`;
