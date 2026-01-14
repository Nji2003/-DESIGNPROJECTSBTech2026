import re

FAILED_LOGIN_PATTERN = r"Failed login from (\d+\.\d+\.\d+\.\d+)"

def extract_failed_login_ips(log_text: str) -> list:
    """
    Extracts IP addresses involved in failed login attempts.
    """
    return re.findall(FAILED_LOGIN_PATTERN, log_text)
