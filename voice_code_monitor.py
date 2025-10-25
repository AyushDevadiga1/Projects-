#voice_code_monitor
'''An app that monitors the app for any errors and if not found reads the otuput of it.'''
import subprocess
import pyttsx3

def speak(text):
    engine = pyttsx3.init()
    engine.setProperty('rate', 175)
    engine.say(text)
    engine.runAndWait()

def run_and_announce(script_name):
    try:
        print(f"Running {script_name}...")
        result = subprocess.run(
            ["python", script_name],
            capture_output=True,
            text=True
        )

        if result.returncode == 0:
            print("Code executed successfully!\nOutput:")
            print(result.stdout)
            success_message = "The code ran successfully. The output is: " + result.stdout.strip()
            speak(success_message)
        else:
            print("Oops! Something went wrong.\nError:")
            print(result.stderr)
            speak("Oops! Something went wrong. There was an error in your code.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")
        speak("An unexpected error occurred while running the code.")

if __name__ == "__main__":
    script_to_run = input("Enter the script file name (e.g., test_script.py): ")
    run_and_announce(script_to_run)
