import string

def caesar_cipher():
    letters_upper = list(string.ascii_uppercase)
    letters_lower = list(string.ascii_lowercase)
    numbers = list(string.digits)
    
    no_shift = int(input("\nHow many shifts? > ")) % 26  # Wrap within 26 for letters
    num_shift = no_shift % 10  # Wrap within 10 for numbers
    words = input("\nInput any text > ")

    cipher_text = ""

    for char in words:
        if char in letters_upper:
            new_index = (letters_upper.index(char) + no_shift) % 26
            cipher_text += letters_upper[new_index]
        elif char in letters_lower:
            new_index = (letters_lower.index(char) + no_shift) % 26
            cipher_text += letters_lower[new_index]
        elif char in numbers:
            new_index = (numbers.index(char) + num_shift) % 10
            cipher_text += numbers[new_index]
        else:
            cipher_text += char  # Keep spaces, punctuation, and special characters unchanged

    print("\nCiphered Text:", cipher_text)

caesar_cipher()