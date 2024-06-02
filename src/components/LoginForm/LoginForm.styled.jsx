import styled from 'styled-components';
export const Section = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(circle at center, #ffeb3b 5%, #f89498 45%);
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 21px;
  border: 3px solid brown;
  border-radius: 15px;
  height: 40%;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  color: #000000;
  font-size: 20px;
`;

export const Input = styled.input`
  color: #53545af5;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  margin-top: 5px;
`;

export const Button = styled.button`
  padding: 8px 10px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #3c8092;
  color: #fff;
  background-color: #4cb0d4;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #4cd8d6;
  }
`;
