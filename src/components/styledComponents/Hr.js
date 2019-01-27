import styled from 'styled-components';

export default styled.hr`
border-top: ${props => props.primary ? "2px dotted purple " : "3px solid purple"};
width :  ${props => props.primary ? "50% " : "100%"};
margin: 30px auto 10px auto;

`;

