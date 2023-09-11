import styled from "@emotion/styled";

export const Container = styled.div`
  font-size: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (min-width: 860px) {
    flex-wrap: nowrap;
  }
`

export const BoxImg = styled.div`
  margin: 50px;
  text-align: center;

  img {
    width: 200px;
    border-radius: 50%;

    @media (min-width: 860px) {
      width: 300px;
    }
  }
`

export const BoxTexto = styled.div`
  margin: 30px;

  @media (min-width: 860px) {
    margin: 50px;
    margin-left: 0px;
  }
`
  
export const BoxContatos = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const BoxIconeContatos = styled.div`
  width: 60px;
  height: 60px;
  border: 2px solid;
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxTextoContatos = styled.div`
  width: 230px;
  height: 60px;
  border: 2px solid;
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
  
export const MeuNome = styled.div`
  display: flex;
  gap: 10px;
`
  
export const Barrinha = styled.div`
  margin-top: 7px;
  margin-bottom: 7px;
  min-width: 8px;
  border-radius: 3px;
`

export const BoxMideaSocial = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`