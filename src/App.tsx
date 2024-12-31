import './App.css'
import RecorderControls from './AudioRecorder'
import useRecorder from './AudioRecorder/use-recorder'
import RecordingsList from './Recordings';

function App() {
  const { recorderState, ...handlers } = useRecorder();


  return (
    <>
      <RecorderControls recorderState={recorderState} handlers={handlers} />
      <RecordingsList audio={recorderState.audio} />
    </>
  )
}

export default App
