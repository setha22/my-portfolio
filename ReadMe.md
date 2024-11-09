 /* @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

::after,
::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.sidebar-logo-link{
    text-decoration: none;
}

.sidebar-link{
    text-decoration: none;
}

li {
    list-style: none;
}

h1 {
    font-weight: 600;
    font-size: 1.5rem;
}

body {
    font-family: 'Poppins', sans-serif;
}

.wrapper {
    display: flex;
} 



 .wrapper{
    display: flex;
 } */

 /* COLOR PALLETE 
 FAF7F0 - DARK WHITE
 D8D2C2 - KINDA GREY
 B17457 - BROWN 
 4A4947 - DARK BROWN */
/* header{
    margin: 0;
    padding: 0;
    top:0;

    height: auto;
    width: 100%;
    background-color: white;
    display:flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap:wrap;
}

li{
    list-style: none;
}
.navlist {
    display: flex;
    margin-left: auto;
    flex-direction: row;
    list-style: none;
}
 */

 * {
    background-color: #D8D2C2;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
header{
    position: fixed;
    width: 100%;
   /* Make sure it's on top */
}
 .navbar{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color: #FAF7F0 ;
    padding: 15px;
    width: 100%;
    transition:all ease .50s;
    box-shadow: 0 0 10px rgb(0, 0, 0.1);
     
 }
 .menu{
    background-color: #FAF7F0;
 }
 .navbar a{
    text-decoration: none;
    /* padding:50px; */
    color: inherit;
    background-color: #FAF7F0;
 }
 .navbar a:hover, navbar a:active{
    color:aliceblue;
    text-shadow:0 0 10px rgb(0, 0, 0.1); ;
 }
 .logo{
    margin-left: 50px;
    background-color: #FAF7F0;
 }
 .list{
     
    list-style: none;
    display: flex;
    gap: 25px; 
    margin-right: 50px;
    margin-left:50px;
    /* width: 100%;  */
    background-color: #FAF7F0;
    z-index: 1000; 
    
 }
 .list li {
    /* flex:1; */
    /* Ensure that the list items stretch evenly */
    background-color: #FAF7F0;

    
}

 #toggler, .navbar label{
    display: none;
    padding-right: 50px;
    background-color:#FAF7F0;
 }
 .intro{
    display:flex;
    flex-direction: wrap;
    justify-content: space-between;
    padding-top:25px;
    
 }
 .mytext{
    text-align: center;
    padding: 50px;

 }
 .image{
    display: flex;
    padding: 50px;
    gap:10px;
    align-items: center;
    flex-direction: column;
}

 .image img{
    border-radius: 500px;

 }
 .btn-start{
    text-align: center;
    color:#FAF7F0;
    text-decoration: none;
    width:200px;
    padding:10px 10px;
    border: 2px  solid  #FAF7F0;;
    border-radius: 15px;
    background-color: #B17457;
    box-shadow: 0 0 10px rgb(245, 242, 242);
 }
 a:hover, a:active {
    background-color: #FAF7F0;
    color:#B17457;
 }

 .footer {
    display: flex;
    background-color: #B17457;
    width: 100%;
    height: 100px;
    
 }
 .footer h2 , footer p{
    background-color: #B17457;

 }

 @media screen and (max-width: 600px){
    .menu{
        width: 100%;
        max-height: 0;
        overflow: hidden;
    }
    .list{
        flex-direction: column;
        align-items: center;
        padding: 20px;
        border-top: 10px black;
    }
    .navbar label{
        display: inline-flex;
        align-items: center;
        cursor:pointer;
    }
    #toggler:checked ~ .menu{
        max-height: 100%;
       
    }
    .intro{
        flex-direction: column;
    } 
 }


 ---------------------