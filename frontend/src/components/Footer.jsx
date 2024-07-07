import { Container, Row, Col } from "react-bootstrap"


const Footer = () => {
    const currentYear =  new Date().getFullYear()
  return (
    <footer>
        <Container fluid className="bg-body-secondary text-center py-3">
            <Row>
                <Col>
                    <p>Copyright &copy; {currentYear} Ecommerce. All rights reserved.</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
