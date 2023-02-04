import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { connectToMetamask } from '../../store/connectionSlice';
import ethereum from '../../data/ethereumProvider';

import "./button.css";


type PropsType = {
    children: string;
}

const Button: React.FC<PropsType> = (
    { children }
) => {
    const dispatch = useAppDispatch();
    const { userAccount } = useAppSelector(state => state.connectionReducer);

    const getShortToken = (str: string) => {
        return str.slice(0, 11) + '...' + str.slice(-4);
    }

    const connectHandler = () => dispatch(connectToMetamask());

    const chainChangedHandler = () => window.location.reload();

    React.useEffect(() => {
        ethereum.on('accountsChanged', connectHandler);
        ethereum.on('chainChanged', chainChangedHandler);

        return () => {
            ethereum.removeListener('accountChanged', connectHandler);
            ethereum.removeListener('chainChanged', chainChangedHandler);
        }
    }, [])

    return (
        <div
            className={!userAccount
                ? "header__button"
                : "header__button active"}
            onClick={connectHandler}
        >

            {userAccount &&
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.5324 1.46002L13.2749 8.35622L14.8105 4.29206L21.5324 1.46002Z" fill="#E17726" stroke="#E17726" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2.48535 1.46002L10.6693 8.42061L9.20731 4.29206L2.48535 1.46002Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.5589 17.45L16.3618 21.2383L21.0664 22.7003L22.414 17.5328L18.5589 17.45Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.61133 17.5328L2.95081 22.7003L7.64721 21.2383L5.45827 17.45L1.61133 17.5328Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.3942 11.0503L6.0874 13.2755L10.7429 13.5146L10.5877 7.85968L7.3942 11.0503Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.6236 11.0504L13.3811 7.79535L13.2749 13.5146L17.9304 13.2755L16.6236 11.0504Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.64746 21.2383L10.4652 19.7027L8.03952 17.5695L7.64746 21.2383Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5527 19.7027L16.3623 21.2383L15.9784 17.5695L13.5527 19.7027Z" fill="#E27625" stroke="#E27625" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.3623 21.2384L13.5527 19.7029L13.7814 21.7625L13.7569 22.6361L16.3623 21.2384Z" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.64746 21.2384L10.2611 22.6361L10.2447 21.7625L10.4652 19.7029L7.64746 21.2384Z" fill="#D5BFB2" stroke="#D5BFB2" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.3101 16.2087L7.97412 15.4363L9.62395 14.5812L10.3101 16.2087Z" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.7075 16.2087L14.3936 14.5812L16.0517 15.4363L13.7075 16.2087Z" fill="#233447" stroke="#233447" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.6474 21.2383L8.05581 17.45L5.4585 17.5328L7.6474 21.2383Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M15.9619 17.45L16.3621 21.2383L18.5592 17.5328L15.9619 17.45Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M17.9304 13.2755L13.2749 13.5145L13.7078 16.2087L14.3939 14.5811L16.0519 15.4363L17.9304 13.2755Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.97411 15.4363L9.62394 14.5811L10.3101 16.2087L10.7429 13.5145L6.0874 13.2755L7.97411 15.4363Z" fill="#CC6228" stroke="#CC6228" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6.0874 13.2755L8.03949 17.5695L7.97411 15.4363L6.0874 13.2755Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.052 15.4363L15.9785 17.5695L17.9306 13.2755L16.052 15.4363Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.743 13.5145L10.3101 16.2087L10.8573 19.3901L10.9798 15.1972L10.743 13.5145Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.2746 13.5145L13.0459 15.188L13.1603 19.3901L13.7075 16.2087L13.2746 13.5145Z" fill="#E27525" stroke="#E27525" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.7078 16.2088L13.1606 19.3902L13.5527 19.7028L15.9785 17.5696L16.052 15.4363L13.7078 16.2088Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.97412 15.4363L8.0395 17.5696L10.4652 19.7028L10.8573 19.3902L10.3101 16.2088L7.97412 15.4363Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.7568 22.636L13.7813 21.7625L13.5689 21.5602H10.4489L10.2447 21.7625L10.2611 22.636L7.64746 21.2383L8.5622 22.0843L10.4163 23.5279H13.5934L15.4557 22.0843L16.3622 21.2383L13.7568 22.636Z" fill="#C0AC9D" stroke="#C0AC9D" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.5525 19.7028L13.1604 19.3902H10.8571L10.4652 19.7028L10.2446 21.7625L10.4488 21.5602H13.5688L13.7812 21.7625L13.5525 19.7028Z" fill="#161616" stroke="#161616" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M21.8836 8.80676L22.5779 5.00009L21.5324 1.46002L13.5527 8.1264L16.6237 11.0503L20.9607 12.4756L21.9163 11.2159L21.4998 10.8756L22.1613 10.1953L21.655 9.75387L22.3165 9.18377L21.8836 8.80676Z" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M1.43994 5.00009L2.14236 8.80676L1.69314 9.18377L2.36288 9.75387L1.85649 10.1953L2.51806 10.8756L2.10152 11.2159L3.05713 12.4756L7.39414 11.0503L10.4651 8.1264L2.4854 1.46002L1.43994 5.00009Z" fill="#763E1A" stroke="#763E1A" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M20.9607 12.4755L16.6238 11.0504L17.9306 13.2755L15.9785 17.5695L18.5595 17.5328H22.4146L20.9607 12.4755Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M7.39397 11.0504L3.05699 12.4755L1.61133 17.5328H5.45827L8.03919 17.5695L6.08717 13.2755L7.39397 11.0504Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M13.275 13.5146L13.5527 8.12633L14.8105 4.29205H9.20752L10.4653 8.12633L10.743 13.5146L10.8492 15.2065L10.8573 19.3902H13.1606L13.1688 15.2065L13.275 13.5146Z" fill="#F5841F" stroke="#F5841F" strokeWidth="0.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}

            {!userAccount
                ? <span>{children}</span>
                : <span>
                    {getShortToken(userAccount)}
                </span>}

            {userAccount &&
                <svg width="20" height="20" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7713 8.88535L9.82868 7.94268L10.7713 7.00002C11.019 6.75239 11.2154 6.45841 11.3494 6.13487C11.4834 5.81132 11.5524 5.46455 11.5524 5.11435C11.5524 4.76415 11.4834 4.41738 11.3494 4.09383C11.2154 3.77029 11.019 3.47631 10.7713 3.22868C10.5237 2.98105 10.2297 2.78462 9.9062 2.65061C9.58266 2.51659 9.23588 2.44761 8.88568 2.44761C8.53548 2.44761 8.18871 2.51659 7.86517 2.65061C7.54162 2.78462 7.24765 2.98105 7.00002 3.22868L6.05735 4.17135L5.11468 3.22868L6.05735 2.28602C6.80956 1.54596 7.82372 1.13312 8.87894 1.13742C9.93415 1.14171 10.9449 1.5628 11.6911 2.30896C12.4372 3.05511 12.8583 4.06588 12.8626 5.1211C12.8669 6.17631 12.4541 7.19048 11.714 7.94268L10.7713 8.88535ZM8.88535 10.7713L7.94268 11.714C7.57236 12.0904 7.13118 12.3898 6.64459 12.5948C6.158 12.7999 5.63563 12.9065 5.1076 12.9087C4.57958 12.9108 4.05635 12.8084 3.56811 12.6073C3.07986 12.4063 2.63626 12.1105 2.26289 11.7371C1.88952 11.3638 1.59376 10.9202 1.39269 10.4319C1.19161 9.94368 1.0892 9.42045 1.09135 8.89243C1.0935 8.36441 1.20017 7.84203 1.40522 7.35544C1.61026 6.86885 1.90962 6.42767 2.28602 6.05735L3.22868 5.11468L4.17135 6.05735L3.22868 7.00002C2.98105 7.24765 2.78462 7.54162 2.65061 7.86517C2.51659 8.18871 2.44761 8.53548 2.44761 8.88568C2.44761 9.23588 2.51659 9.58266 2.65061 9.9062C2.78462 10.2297 2.98105 10.5237 3.22868 10.7713C3.47631 11.019 3.77029 11.2154 4.09383 11.3494C4.41738 11.4834 4.76415 11.5524 5.11435 11.5524C5.46455 11.5524 5.81132 11.4834 6.13487 11.3494C6.45841 11.2154 6.75239 11.019 7.00002 10.7713L7.94268 9.82868L8.88535 10.7713ZM8.88535 4.17135L9.82868 5.11468L5.11468 9.82802L4.17135 8.88535L8.88535 4.17202V4.17135ZM2.85002 0.528683L4.13802 0.18335L4.82802 2.76002L3.54068 3.10535L2.85002 0.52935V0.528683ZM9.17202 11.2407L10.4593 10.8954L11.15 13.4714L9.86202 13.8167L9.17202 11.2407ZM0.528683 2.85002L3.10468 3.54068L2.75935 4.82802L0.18335 4.13802L0.528683 2.85002ZM11.2407 9.17202L13.8167 9.86202L13.4714 11.15L10.8954 10.4593L11.2407 9.17202Z" fill="#ABB6B7"/>
                </svg>}
        </div>
    );
};

export default Button;