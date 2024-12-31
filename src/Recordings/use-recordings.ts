import { useState, useEffect } from "react";
import { Audio } from "../types";
import { deleteAudio } from "./controls";

export default function useRecordingsList(audio: string | null) {
    const [recordings, setRecordings] = useState<Audio[]>([]);

    useEffect(() => {
        if (audio)
            setRecordings((prevState: Audio[]) => {
                return [...prevState, { key: crypto.randomUUID(), audio }];
            });
    }, [audio]);

    return {
        recordings,
        deleteAudio: (audioKey: string) => deleteAudio(audioKey, setRecordings),
    };
}
