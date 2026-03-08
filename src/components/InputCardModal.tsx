import { Modal, TextField, Button, Card, CardContent } from "@mui/material";
import { useForm } from "react-hook-form";

import useModal from "../hooks/useModal.ts";
import type { InputCardFormValues } from "../types/types.ts";

interface InputCardModalProps {
  onInputSubmit: (data: InputCardFormValues) => void;
}

// InputCard is used to show small input text modal, which takes "New Book" name or "New Chapter" name
function InputCardModal({ onInputSubmit }: InputCardModalProps) {
  // inputName can be "book" or "chapter" or "page"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputCardFormValues>();

  const { isOpen, dispatchCloseModal } = useModal();

  return (
    <Modal
      open={isOpen}
      aria-labelledby="Create new book or chapter"
      className="flex justify-center items-center"
    >
      <Card>
        <CardContent>
          <form
            onSubmit={handleSubmit(onInputSubmit)}
            className="flex gap-2 items-center"
          >
            <div className="input-form-field-style mt-4">
              <TextField
                id="textInput-id"
                label={`Name`}
                variant="outlined"
                {...register("name", { required: true })}
              />

              <span
                className={`text-xs text-red-400 ${errors.name ? "visible" : "invisible"}`}
              >
                Name is required!
              </span>
            </div>

            <Button
              variant="outlined"
              disabled={errors.name === undefined}
              type="submit"
              onClick={dispatchCloseModal}
            >
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

export default InputCardModal;
