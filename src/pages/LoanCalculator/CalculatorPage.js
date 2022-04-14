import React, { useEffect, useState } from "react";
import {
  Label,
  Table,
  Input,
  Container,
  Form,
  Col,
  FormGroup,
} from "reactstrap";

const CalculatorPage = () => {
  const [loanInput, setLoanInput] = useState({
    principal: "0",
    tenure: "0",
    interestRate: "0",
    frequency: "1",
  });
  const [loanRes, setLoanRes] = useState({
    totalRes: "0",
    paybackRes: "0",
    totalInterestRes: "0",
  });

  const [paymentState, setPaymentState] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log([name], value);
    setLoanInput((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleResChange = (key, value) => {
    // console.log([name], value);
    setLoanRes((prev) => {
      return { ...prev, [key]: value };
    });
  };

  useEffect(() => {
    if (
      loanInput.principal > 0 &&
      loanInput.tenure > 0 &&
      loanInput.interestRate > 0 &&
      loanInput.frequency
    ) {
      var payments = [];
      // var payments = [Array.from({ length: loanInput.tenure + 1 })];
      var rate = loanInput.interestRate / 100 / (12 / loanInput.frequency);
      var noOfPayments = parseInt(
        loanInput.tenure * (12 / loanInput.frequency)
      );
      // console.log(noOfPayments,"rate");

      // var c = r / (1 - Math.pow(1 + r, -loanInput.tenure)) * loanInput.principal;
      //payment amount
      var paymentAmount =
        (rate * loanInput.principal) / (1 - Math.pow(1 + rate, -noOfPayments));
      var paymentAmountRounded = Math.round(paymentAmount * 100.0) / 100.0;
      var total = paymentAmount * noOfPayments;
      var totalRounded = Math.round(total * 100.0) / 100.0;
      var totalInterestRes = totalRounded - loanInput.principal;
      var totalInterestResRounded =
        Math.round(totalInterestRes * 100.0) / 100.0;

      handleResChange("totalRes", totalRounded);
      handleResChange("paybackRes", paymentAmountRounded);
      handleResChange("totalInterestRes", totalInterestResRounded);

      var remainingPrincipal = loanInput.principal;

      payments[0] = {
        index: 0,
        amount: 0,
        principal: 0,
        interest: 0,
        remainingAmount: Math.round(total * 100.0) / 100,
      };
      for (var i = 1; i <= noOfPayments; i++) {
        var interest = remainingPrincipal * rate;
        payments[i] = {
          index: i,
          amount: Math.round(paymentAmount * 100.0) / 100,
          principal: Math.round((paymentAmount - interest) * 100.0) / 100,
          interest: Math.round(interest * 100.0) / 100,
          remainingAmount:
            Math.round((total - paymentAmount * i) * 100.0) / 100,
        };
        remainingPrincipal -= paymentAmount - interest;
      }
      setPaymentState(payments);

      console.log(noOfPayments);
    }
  }, [loanInput]);

  return (
    <React.Fragment>
      {/* {console.log(paymentState)} */}
      <Container aria-rowspan="1">
        <div className="">
          <h4>Loan</h4>
          <div style={{ display: "flex" }}>
            <div>
              <Form >
                <FormGroup row>
                  <Label sm={3} label="Amount" for="exampleRange1">
                    Amount
                  </Label>
                  <Col sm={5}>
                    <Input
                      id="principal-in"
                      name="principal"
                      placeholder="principal"
                      type="text"
                      onChange={handleInputChange}
                      value={loanInput.principal}
                    />
                  </Col>
                  <Col sm={4}>
                    <Input
                      id="principal"
                      name="principal"
                      type="range"
                      min={0}
                      max={1e6}
                      step={1000}
                      onChange={handleInputChange}
                      value={loanInput.principal}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} label="Duration" for="exampleRange2">
                    Tenure
                  </Label>
                  <Col sm={5}>
                    <Input
                      id="tenure-in"
                      name="tenure"
                      placeholder="tenure"
                      type="text"
                      onChange={handleInputChange}
                      value={loanInput.tenure}
                    />
                  </Col>
                  <Col sm={4}>
                    <Input
                      id="tenure"
                      name="tenure"
                      type="range"
                      min={1}
                      max={20}
                      step={1}
                      onChange={handleInputChange}
                      value={loanInput.tenure}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} label="Interest Rate" for="exampleRange3">
                    Interest Rate
                  </Label>
                  <Col sm={5}>
                    <Input
                      id="interestRate-in"
                      name="interestRate"
                      placeholder="Interest Rate"
                      type="text"
                      onChange={handleInputChange}
                      value={loanInput.interestRate}
                    />
                  </Col>
                  <Col sm={4}>
                    <Input
                      id="interestRate"
                      name="interestRate"
                      type="range"
                      min={1}
                      max={20}
                      step={0.1}
                      onChange={handleInputChange}
                      value={loanInput.interestRate}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={3} label="Interest Rate" for="exampleRange3">
                    Frequency
                  </Label>
                  <Col sm={5}>
                    <Input
                      id="frequency-in"
                      name="frequency"
                      placeholder="Frequency"
                      type="text"
                      onChange={handleInputChange}
                      value={loanInput.frequency}
                    />
                  </Col>
                  <Col sm={4}>
                    <Input
                      id="frequency"
                      name="frequency"
                      type="range"
                      min={1}
                      max={12}
                      step={1}
                      onChange={handleInputChange}
                      value={loanInput.frequency}
                    />
                  </Col>
                </FormGroup>
              </Form>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <Label label="Total Payback" for="exampleRange4">
                Total Payback
              </Label>
              <Input
                id="totalRes"
                name="totalRes"
                placeholder="Total"
                type="text"
                value={loanRes.totalRes}
              />
              <Label label="Payback Rate" for="exampleRange4">
                Monthly Rate
              </Label>
              <Input
                id="paybackRes"
                name="paybackRes"
                placeholder="Rate"
                type="text"
                value={loanRes.paybackRes}
              />
              <Label label="Total Interest" for="exampleRange5">
                Total Interest
              </Label>
              <Input
                id="totalInterestRes"
                name="totalInterestRes"
                placeholder="interest"
                type="text"
                value={loanRes.totalInterestRes}
              />
            </div>
          </div>
          <h4>Payments</h4>
          <div
            className=""
            style={{
              // height: 500,
              // width: 500,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className=".container-sm "
              style={{
                width: "70%",
                height: "30vh",
                overflowX: "hidden",
              }}
            >
              <Table striped bordered hover size="sm" style={{}}>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Payment</th>
                    <th>Principal</th>
                    <th>Interest</th>
                    <th>Remaining Debt</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentState.length
                    ? paymentState.map((pay) => (
                        <tr key={pay.index}>
                          <th scope="row">{pay.index}</th>
                          <td>{pay.amount}</td>
                          <td>{pay.principal}</td>
                          <td>{pay.interest}</td>
                          <td>{pay.remainingAmount}</td>
                        </tr>
                      ))
                    : null}
                  {/* <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr> */}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default CalculatorPage;