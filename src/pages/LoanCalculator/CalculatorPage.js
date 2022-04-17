import React, { useEffect, useState } from "react";
import {
  Label,
  Table,
  Input,
  Container,
  Form,
  Col,
  FormGroup,
  InputGroupText,
  InputGroup,
} from "reactstrap";
import { currencyFormatterRupee, currencyFormatter } from "../../utils";

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
      var rate = loanInput.interestRate / 100 / (12 / loanInput.frequency);
      var noOfPayments = parseInt(
        loanInput.tenure * (12 / loanInput.frequency)
      );
      // console.log(noOfPayments,"rate");

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
          amount: currencyFormatterRupee(
            Math.round(paymentAmount * 100.0) / 100
          ),
          principal: currencyFormatterRupee(
            Math.round((paymentAmount - interest) * 100.0) / 100
          ),
          interest: currencyFormatterRupee(Math.round(interest * 100.0) / 100),
          remainingAmount: currencyFormatterRupee(
            Math.round((total - paymentAmount * i) * 100.0) / 100
          ),
        };
        remainingPrincipal -= paymentAmount - interest;
      }
      setPaymentState(payments);

      console.log(noOfPayments);
    }else{
      setPaymentState([])
      setLoanRes({
        totalRes: "0",
        paybackRes: "0",
        totalInterestRes: "0",
      })
    }
  }, [loanInput]);

  return (
    <div style={{margin:"1% 4% 0 4%"}}>
        <div className="">
          <h2>Loan Calculator</h2>
          <hr />
          <div style={{ display: "flex" }}>
            <div>
              <h4>Inputs</h4>
              <hr />
              <Form>
                <FormGroup row>
                  <Label sm={3} label="Amount" for="exampleRange1">
                    Amount
                  </Label>
                  <Col sm={5}>
                    <InputGroup>
                      <InputGroupText>₹</InputGroupText>
                      <Input
                        id="principal-in"
                        name="principal"
                        placeholder="principal"
                        type="text"
                        aria-label="SSS"
                        onChange={handleInputChange}
                        value={loanInput.principal}
                      />
                    </InputGroup>
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
                    <InputGroup>
                      <InputGroupText>Years</InputGroupText>
                      <Input
                        id="tenure-in"
                        name="tenure"
                        placeholder="tenure"
                        type="text"
                        onChange={handleInputChange}
                        value={loanInput.tenure}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={4}>
                    <Input
                      id="tenure"
                      name="tenure"
                      type="range"
                      min={0}
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
                    <InputGroup>
                      <InputGroupText>%</InputGroupText>
                      <Input
                        id="interestRate-in"
                        name="interestRate"
                        placeholder="Interest Rate"
                        type="text"
                        onChange={handleInputChange}
                        value={loanInput.interestRate}
                      />
                    </InputGroup>
                  </Col>
                  <Col sm={4}>
                    <Input
                      id="interestRate"
                      name="interestRate"
                      type="range"
                      min={0}
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
                    <InputGroup>
                      <InputGroupText>Per</InputGroupText>
                      <Input
                        id="frequency-in"
                        name="frequency"
                        placeholder="Frequency"
                        type="text"
                        onChange={handleInputChange}
                        value={loanInput.frequency}
                      />
                      <InputGroupText>Month(s)</InputGroupText>
                    </InputGroup>
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
              <h4>Results</h4>
              <hr />
              <Form>
                <FormGroup row>
                  <Label sm={4} label="Total Payback" for="exampleRange4">
                    Total Payback
                  </Label>
                  <Col sm={8}>
                    <InputGroup>
                      <InputGroupText>₹</InputGroupText>
                      <Input
                        id="totalRes"
                        name="totalRes"
                        placeholder="Total"
                        type="text"
                        disabled
                        readOnly
                        value={currencyFormatter(loanRes.totalRes)}
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={4} label="Payback Rate" for="exampleRange4">
                    Payback Rate
                  </Label>
                  <Col sm={8}>
                    <InputGroup>
                      <InputGroupText>₹</InputGroupText>
                      <Input
                        id="paybackRes"
                        name="paybackRes"
                        placeholder="Rate"
                        type="text"
                        disabled
                        readOnly
                        value={currencyFormatter(loanRes.paybackRes)}
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label sm={4} label="Total Interest" for="exampleRange5">
                    Total Interest
                  </Label>
                  <Col sm={8}>
                    <InputGroup>
                      <InputGroupText>₹</InputGroupText>
                      <Input
                        id="totalInterestRes"
                        name="totalInterestRes"
                        placeholder="interest"
                        type="text"
                        disabled
                        readOnly
                        value={currencyFormatter(loanRes.totalInterestRes)}
                      />
                    </InputGroup>
                  </Col>
                </FormGroup>
              </Form>
            </div>
          </div>
          <hr />
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
                height: "50vh",
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
                    <th>Remaining Principal</th>
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
                </tbody>
              </Table>
            </div>
          </div>
        </div>
                    </div>
  );
};

export default CalculatorPage;
