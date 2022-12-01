import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className='m-auto text-center bg-light text-lg-start'>
                <div className='text-center p-3'>
                © 2022 Copyright: 
                <a className='text-dark' href='index'><br></br> Aluno: João Paulo Gomes de Figueiredo</a>
                </div>
            </footer>
        );
    }
}

export default Footer;