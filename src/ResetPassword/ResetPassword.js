import React, {useState} from "react";
import { Auth } from "aws-amplify";
import { Link } from "react-router-dom";
import { useFormFields } from "../useFormFields";

const ResetPassword = () => {

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
                <label>Email:</label>
                <input defaultValue={fields.email} onChange={handleFieldChange} name="email" type="email" />
                <button>Send Confirmation</button>
            </form>
        );
    }


    function renderConfirmationForm() {
        return (
            <form onSubmit={handleConfirmClick}>
                <label>Code:</label>
                <input type="tel" onChange={handleFieldChange} name="code"  defaultValue={fields.code} />

                <label>New password</label>
                <input type="password" onChange={handleFieldChange} name="password"  defaultValue={fields.password} />

                <label>Confirm password</label>
                <input type="password" onChange={handleFieldChange} name="confirmPassword" defaultValue={fields.confirmPassword} />

                <button>Confirm</button>

            </form>
        )
    }


    function renderSuccessMessage() {
        return (
            <div>
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


export default ResetPassword;