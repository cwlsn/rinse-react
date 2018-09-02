import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	border-radius: 8px;
	color: #fff;
	background: mediumvioletred;
	padding: 8px 15px;
	border: none;
	outline: none;
`;

function Button(props) {
	return <ButtonWrapper {...props}>{props.children}</ButtonWrapper>;
}

export default Button;
