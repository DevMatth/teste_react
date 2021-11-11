import { createContext, useEffect, useState, ReactNode } from "react";
import { api } from "../services/api";

interface segmentProps {
  list: {
    description: string,
    id: string,
  }
}

interface SegmentProviderProps {
  children: ReactNode
}

interface SegmentsContextData {
  segments: segmentProps[];
  SegmentInputValue: (valueInput: string) => void;
}

export const SegmentContext = createContext<SegmentsContextData>(
  {} as SegmentsContextData
)


export function SegmentProvider({children}: SegmentProviderProps) {
  const [ segments, setSegments ] = useState<segmentProps[]>([])
  const [ error, setError ] = useState('')
  const [ valueInput, setValueInput ] = useState('')
  useEffect(() => {
    api
      .get('/api/segmentos/')
      .then((response) => {
        setSegments(response.data.list)
      })
      .catch(error => {
        setError(error.message)
      })
      
  }, [valueInput])

  function SegmentInputValue(valueInput: string) {
    setValueInput(valueInput)
  }

  return (
    <SegmentContext.Provider value={{segments, SegmentInputValue}}>
      {children}
    </SegmentContext.Provider>
  )
}
