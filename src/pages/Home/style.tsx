import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  font-size: 20px;
  justify-content: center;
  
  @media (max-width: 860px) {
    flex-wrap: wrap;
    font-size: 15px;
  }
`

export const Box1 = styled.div`
  display: flex;
  justifyContent: space-between;
  
  @media (max-width: 860px) {
    width: 100%;
  }
`

export const BarraLateral = styled.div`
  width: 30px;
  height: 100%;
  
  @media (max-width: 860px) {
    width: 15px;
  }
`

export const BoxImg = styled.div`
  margin: 50px;
  text-align: center;
  
  @media (max-width: 860px) {
    margin: 30px;
  }

  img {
    width: 260px;
    border-radius: 50%;

    @media (max-width: 860px) {
      width: 180px;
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
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BoxTextoContatos = styled.div`
  width: 230px;
  height: 60px;
  border-radius: 15px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const BoxApresentacao = styled.div`
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
  width: 6px;
  border-radius: 3px;
`

export const BoxAcoes = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 860px) {
    justify-content: center;
  }
`