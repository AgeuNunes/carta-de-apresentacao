import styled from "@emotion/styled";

export const Container = styled.div`
  font-size: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  
  @media (max-width: 860px) {
    flex-wrap: wrap;
  }
`

export const BoxImg = styled.div`
  margin: 50px;
  text-align: center;
  
  @media (max-width: 860px) {
    margin: 30px;
  }

  img {
    width: 280px;
    border-radius: 50%;

    @media (max-width: 860px) {
      width: 200px;
    }
  }
`

export const BoxContatos = styled.div`
  margin: 50px;
  display: flex;
  justify-content: center;
  gap: 10px;

  @media (max-width: 860px) {
    margin: 20px;
  }
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

export const BoxTexto = styled.div`
  margin: 50px;
  margin-left: 0px;

  @media (max-width: 860px) {
    margin: 30px;
  }
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

export const BoxAcoes = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: end;
  gap: 20px;
  
  @media (max-width: 860px) {
    justify-content: center;
  }
`