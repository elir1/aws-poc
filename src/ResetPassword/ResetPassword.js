import React, { useState } from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import {
    FormGroup,
    FormControl,
    FormLabel,
    Button
} from "react-bootstrap";

import { useFormFields } from "../useFormFields";

import "./ResetPassword.css";

export default function ResetPassword() {
    const [fields, handleFieldChange] = useFormFields({
        code: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [codeSent, setCodeSent] = useState(false);
    const [confirmed, setConfirmed] = useState(false);
    const [isConfirming, setIsConfirming] = useState(false);
    const [isSendingCode, setIsSendingCode] = useState(false);

    function validateCodeForm() {
        return fields.email.length > 0;
    }

    function validateResetForm() {
        return (
            fields.code.length > 0 &&
            fields.password.length > 0 &&
            fields.password === fields.confirmPassword
        );
    }

    async function handleSendCodeClick(event) {
        event.preventDefault();

        setIsSendingCode(true);

        try {
            await Auth.forgotPassword(fields.email);
            setCodeSent(true);
        } catch (error) {
            console.log(error);
            setIsSendingCode(false);
        }
    }

    async function handleConfirmClick(event) {
        event.preventDefault();

        setIsConfirming(true);

        try {
            await Auth.forgotPasswordSubmit(
                fields.email,
                fields.code,
                fields.password
            );
            setConfirmed(true);
        } catch (error) {
            console.log(error);
            setIsConfirming(false);
        }
    }

    function renderRequestCodeForm() {
        return (
            <form onSubmit={handleSendCodeClick}>
                <FormGroup bssize="large" controlId="email">
                    <FormLabel>Email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                 <Button block size="lg" type="submit" disabled={!validateCodeForm()}>
                 Send Confirmation
                </Button>
            </form>
        );
    }

    function renderConfirmationForm() {
        return (
            <form onSubmit={handleConfirmClick}>
                <FormGroup bssize="large" controlId="code">
                    <FormLabel>Confirmation Code</FormLabel>
                    <FormControl
                        autoFocus
                        type="tel"
                        value={fields.code}
                        onChange={handleFieldChange}
                    />
                    {/* <HelpBlock>
            Please check your email ({fields.email}) for the confirmation code.
          </HelpBlock> */}
                </FormGroup>
                <hr />
                <FormGroup bssize="large" controlId="password">
                    <FormLabel>New Password</FormLabel>
                    <FormControl
                        type="password"
                        value={fields.password}
                        onChange={handleFieldChange}
                    />
                </FormGroup>
                <FormGroup bssize="large" controlId="confirmPassword">
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl
                        type="password"
                        value={fields.confirmPassword}
                        onChange={handleFieldChange}
                    />
                </FormGroup>

                <Button block size="lg" type="submit" disabled={!validateResetForm()}>
                    Confirm
                </Button>
            </form>
        );
    }

    function renderSuccessMessage() {
        return (
            <div className="success">
                <p>Your password has been reset.</p>
                <p>
                    <Link to="/login">
                        Click here to login with your new credentials.
                 </Link>
                </p>
            </div>
        );
    }

    return (
        <div className="ResetPassword">
            {!codeSent
                ? renderRequestCodeForm()
                : !confirmed
                    ? renderConfirmationForm()
                    : renderSuccessMessage()}
        </div>
    );
}