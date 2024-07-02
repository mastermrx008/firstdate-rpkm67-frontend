import React from 'react';

interface CustomButtonProps {
    varient: 'first-date'|'rub-peun'|'e-book'|'contact-list'
    className? : string;
    children: React.ReactNode;
}
const fd = ()=>{
    console.log('fd')
}
const rp = ()=>{
    console.log('rp')
}
const eb = ()=>{
    console.log('eb')
}
const cl = ()=>{
    console.log('cl');
}
const buttonProps = {
    'first-date':{
        color: '#FFBBD2',
        onClick: fd
    },
    'rub-peun':{
        color: '#E9A49B',
        onClick: rp
    },
    'e-book':{
        color: '#F1DFC1',
        onClick: eb
    },
    'contact-list':{
        color: '#313131',
        onClick: cl
    }
}
const CustomButton: React.FC<CustomButtonProps> = ({ varient = 'first-date', className, children }) => {
    const {color, onClick} = buttonProps[varient]
    return (
        <button className={`bg-[${color}] w-4/5 h-[5.26vh] rounded-lg drop-shadow-md place-content-center hover:brightness-105`} onClick={onClick}>
            <div className={`flex space-x-1 justify-center items-center ${className}`}>
                {children}
            </div>
        </button>
    );
};

export default CustomButton;