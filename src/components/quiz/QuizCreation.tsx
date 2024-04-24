"use client"
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, useForm, FormProvider } from "react-hook-form"
import quizCreationSchema from '@/schemas/form/quiz'
import { z } from "zod"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '../ui/form'

type Props = {}
type inputs = z.infer<typeof quizCreationSchema>

function QuizCreation({}: Props) {

    const form = useForm<inputs>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
          amount: 3,
          topic: "",
          type: "mcq"
        },
      })

    // 2. Define a submit handler.
    function onSubmit(values: inputs) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
     
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-[500px] h-[500px]">
      <CardHeader>
          <CardTitle className='font-bold text-2x'>Quiz Creation!</CardTitle>
          <CardDescription>
            Choose a topic
          </CardDescription>
        </CardHeader>
        <CardContent>
        <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Topic</FormLabel>
              <FormControl>
                <Input placeholder="Enter a topic" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Number of Questions</FormLabel>
                <FormControl>
                <Input 
                 type='number'
                 min={3}
                 max={10}
                 {...field}
                 onChange={(e) => {form.setValue('amount', parseInt(e.target.value))}} 
                 />
                </FormControl>
                <FormMessage />
            </FormItem>
            )}
            />

        <Button type="submit">Submit</Button>
      </form>
    </FormProvider>
        </CardContent>
      </Card>
    </div>
  )
}

export default QuizCreation