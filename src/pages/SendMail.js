import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import { Container, Typography } from '@mui/material';
  import sendMail from '../assets/sendMail.svg'

  const OuterDiv = styled(Container)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin:auto;
  `

  const LoginImg = styled.img`
    width: 50%;
    margin: auto;
    @media (max-width: 768px) {
    width: 100%;
    }
`;

const Email = styled.span`
    color :#00a5ad;
`

function SendMail() {
    const [email, setEmail] = useState("")

    useEffect(() => {
        setEmail(sessionStorage.getItem("email"))
        // sessionStorage.removeItem("email")
    }, [])

    return (
        <OuterDiv>
            <LoginImg src={sendMail} />
            <Typography variant='h6'>Confirmation mail is send to <Email>{email}</Email></Typography>
        </OuterDiv>
    )
}

export default SendMail