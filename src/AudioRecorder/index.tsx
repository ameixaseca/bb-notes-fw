import { useRef } from "react"

export const AudioRecorder = () => {
    const mediaStream = useRef<MediaStream | null>(null);

    const startRecording = async () => {
        try {
            mediaStream.current = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log(mediaStream.current)
        } catch (error) {
            console.error('Error while trying to access the microphone: ' ,error)
        }
    }

    return (
        <div>
        <h1>Audio Recorder</h1>
        </div>
    )
}