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


`;
