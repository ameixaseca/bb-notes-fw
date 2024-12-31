import { Dispatch, SetStateAction } from "react";
import { Audio } from "../types";

type SetRecordings = Dispatch<SetStateAction<Audio[]>>;

export function deleteAudio(audioKey: string, setRecordings: SetRecordings) {
    setRecordings((prevState) => prevState.filter((record) => record.key !== audioKey));
}
