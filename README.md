# React + Vite

This Web is a simple example of a React + Vite project.
CSS with TailwindCSS, which is a very interesting library and use for Styling Page.
I am still learning how to use Vite and React, so this is a simple example. I will be adding more features as I learn more.

### To push

```
git add .
git commit -m "init commit"
git branch -M main
git push -u origin main
npm run deploy
```

```
import gradio as gr
import torch, os
from transformers import AutoModelForCausalLM, AutoTokenizer
from transformers import StoppingCriteria, TextIteratorStreamer
from threading import Thread

torch.set_num_threads(2)
HF_TOKEN = os.environ.get("HF_TOKEN")

# Loading the tokenizer and model from Hugging Face's model hub.
tokenizer = AutoTokenizer.from_pretrained("google/gemma-2b-it", use_auth_token=HF_TOKEN)
model = AutoModelForCausalLM.from_pretrained("google/gemma-2b-it", use_auth_token=HF_TOKEN)

def count_tokens(text):
    return len(tokenizer.tokenize(text))

# Function to generate model predictions.
def predict(message, history):

    formatted_prompt = f"<start_of_turn>user\n{message}<end_of_turn>\n<start_of_turn>model\n"
    model_inputs = tokenizer(formatted_prompt, return_tensors="pt")

    streamer = TextIteratorStreamer(tokenizer, timeout=120., skip_prompt=True, skip_special_tokens=True)

    generate_kwargs = dict(
        model_inputs,
        streamer=streamer,
        max_new_tokens=2048 - count_tokens(formatted_prompt),
        top_p=0.2,
        top_k=20,
        temperature=0.1,
        repetition_penalty=2.0,
        length_penalty=-0.5,
        num_beams=1
    )
    t = Thread(target=model.generate, kwargs=generate_kwargs)
    t.start()  # Starting the generation in a separate thread.
    partial_message = ""
    for new_token in streamer:
        partial_message += new_token
        yield partial_message

# Setting up the Gradio chat interface.
gr.ChatInterface(predict,
                 title="Gemma 2b Instruct Chat",
                 description=None
                 ).launch()  # Launching the web interface.
```
