import { RecorderControlsProps } from "./types";
import "./index.css"

export default function RecorderControls({ recorderState, handlers }: RecorderControlsProps) {
    const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
    const { startRecording, saveRecording, cancelRecording } = handlers;

    return (
        <div className="controls-container">
            <div className="recorder-display">
                <div className="recording-time">
                    {initRecording && <div className="recording-indicator"></div>}
                    {/* <span>{formatMinutes(recordingMinutes)}</span> */}
                    <span>{recordingMinutes.toString().padStart(2, "0")}</span>
                    <span>:</span>
                    <span>{recordingSeconds.toString().padStart(2, "0")}</span>
                </div>
                {initRecording && (
                    <div className="cancel-button-container">
                        <button className="cancel-button" title="Cancel recording" onClick={cancelRecording}>
                            Cancel Recording
                        </button>
                    </div>
                )}
            </div>
            <div className="start-button-container">
                {initRecording ? (
                    <button
                        className="start-button"
                        title="Save recording"
                        disabled={recordingSeconds === 0}
                        onClick={saveRecording}
                    >
                        Save Recording
                    </button>
                ) : (
                    <button className="start-button" title="Start recording" onClick={startRecording}>
                        Start Recording
                    </button>
                )}
            </div>
        </div>
    );
}


export function formatMinutes(minutes: number) {
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
}

export function formatSeconds(seconds: number) {
    return seconds < 10 ? `0${seconds}` : `${seconds}`;
}
