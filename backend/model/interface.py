"""Callable interface to the model"""
import torch
from transformers import BertForSequenceClassification, BertTokenizer

class Interface():
    def __init__(self):
        self.model = BertForSequenceClassification.from_pretrained(
            "bert-base-uncased", # 12-layer BERT model, with an uncased vocab.
            num_labels = 2,      # 2 output labels for binary classification.
            output_attentions = False,
            output_hidden_states = False,
        )
        self.tokenizer = BertTokenizer.from_pretrained("bert-base-uncased", do_lower_case=True)
        self.model.load_state_dict(torch.load("./model/model.pt"
                                              #, map_location=torch.device('cpu')
                                              ))

    def check_message(self, message):
        """Returns a prediction for the message"""
        encoded_dict = self.tokenizer.encode_plus(
            message,                      # Sentence to encode.
            add_special_tokens = True,    # Add '[CLS]' and '[SEP]'
            max_length = 256,             # Pad & truncate all sentences.
            pad_to_max_length = True,
            truncation = True,
            return_attention_mask = True, # Construct attn. masks.
            return_tensors = 'pt',        # Return pytorch tensors.
        )
        score = self.model(encoded_dict['input_ids'], token_type_ids=None, attention_mask=encoded_dict['attention_mask'])[0][0]
        probabilities = tuple([float(x) for x in torch.sigmoid(score).detach().numpy()])
        return probabilities