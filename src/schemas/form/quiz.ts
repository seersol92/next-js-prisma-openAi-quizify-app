import { z } from "zod"
const quizCreationSchema = z.object({
    topic: z.string().min(4, {
      message: "Topic must be at least 4 characters.",
    }),
    type: z.enum(['mcq', 'open']),
    amount: z.number().min(1, {
        message: "There must be at lease 3 questions."
    }).max(10)
  })

  export default quizCreationSchema;