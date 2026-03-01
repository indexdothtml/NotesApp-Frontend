import { Modal, TextField, Button, Card, CardContent } from "@mui/material";
import { useForm } from "react-hook-form";

import useModal from "../hooks/useModal.js";

// InputCard is used to show small input text modal, which takes "New Book" name or "New Chapter" name
function InputCard({ inputName }) {
  // inputName can be "book" or "chapter" or "page"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isOpen, dispatchCloseModal } = useModal();

  const onSubmit = (data) => {
    if (inputName === "book") {
      // call create new book api
      console.log(`book name: ${{ data }}`);
    } else if (inputName === "chapter") {
      // call create new chapter api
    } else if (inputName === "page") {
      // call create new page api
    }

    dispatchCloseModal();
  };

  return (
    <Modal
      open={isOpen}
      aria-labelledby={`create new ${inputName}`}
      className="flex justify-center items-center"
    >
      <Card>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex gap-2 items-center"
          >
            <div className="input-form-field-style mt-4">
              <TextField
                id="textInput-id"
                label={`${inputName} name`}
                variant="outlined"
                {...register("name", { required: true })}
              />

              <span
                className={`text-xs text-red-400 ${errors.name ? "visible" : "invisible"}`}
              >
                Name is required!
              </span>
            </div>

            <Button variant="outlined" disabled={errors.name} type="submit">
              Create
            </Button>

            <Button
              variant="outlined"
              type="button"
              onClick={dispatchCloseModal}
            >
              Cancel
            </Button>
          </form>
        </CardContent>
      </Card>
    </Modal>
  );
}

export default InputCard;
