import React from 'react'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const Addblog = () => {
  return (
    <Card className="w-2/5 mx-auto my-14">
        <CardHeader className="justify-center">
            <CardTitle>
                Add New Trip
            </CardTitle>
            <CardDescription >
                Create a new trip and share it with your friends!
            </CardDescription>
        </CardHeader>
        <CardContent>
         <TripForms />
        </CardContent>
    </Card>
  )
}

export default Addblog