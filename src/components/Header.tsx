import { NavLink } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import styled from 'styled-components'

function Header() {

    // Styles
    const Root = styled.header`
        width: 100%;
        box-shadow: 0 1px #ddd3;
        padding: 16px 0;
    `

    const LargeContainer = styled.div`
        width: 1100px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        @media(max-width: 1000px) {
            width: 100%;
            padding-left: 16px;
            padding-right: 16px;
        }
    `

    const Logo = styled.a`
        font-size: xx-large;
        text-decoration: none;
        color: inherit;
    `

    const GlobalNav = styled.div`
        display: flex;
        list-style: none;
        margin-top: 12px;

        @media(max-width: 800px) {
            display: none;
        }
    `

    const GlobalNavLink = styled(NavLink)`
        text-decoration: none;
        color: gray;
        margin-left: 32px;
        &:hover {
            color: inherit;
        }
    `

    const BarsButton = styled.button`
        margin-top: 5px;
        cursor: pointer;
        display: none;
        background-color: transparent;
        border: none;
        &:hover {
            opacity: 0.8;
        }
        @media(max-width: 800px) {
            display: block;
        }
    `

    const Bars = styled(FaBars)`
        color: gray;
        font-size: x-large;
    `

    return (

        <Root>
            <LargeContainer>
                <Logo>Hello React TS</Logo>

                <GlobalNav>
                    <li><GlobalNavLink to='/'>Read</GlobalNavLink></li>
                    <li><GlobalNavLink to='/read-realtime'>Read Realtime</GlobalNavLink></li>
                    <li><GlobalNavLink to='/create'>Create</GlobalNavLink></li>
                </GlobalNav>

                <BarsButton className='bars-button'>
                    <Bars className='bars' />
                </BarsButton>

            </LargeContainer>
        </Root>
    )
}

export default Header