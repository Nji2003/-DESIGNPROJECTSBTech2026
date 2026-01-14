# print("✅ log_reader.py LOADED")

# def read_log_file(file_path: str) -> str:
#     """
#     Reads a log file and returns its content as a string.
#     """
#     with open(file_path, "r") as file:
#         return file.read()
from pathlib import Path

print("✅ log_reader.py LOADED")

def read_log_file(file_path) -> str:
    file_path = Path(file_path).resolve()

    if not file_path.exists():
        raise FileNotFoundError(f"Log file not found at: {file_path}")

    with open(file_path, "r", encoding="utf-8") as file:
        return file.read()
