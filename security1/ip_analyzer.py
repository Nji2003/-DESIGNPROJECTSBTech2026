from collections import Counter
from datetime import datetime
from regex_rules import extract_failed_login_ips

THRESHOLD = 5

def analyze_ips(log_text: str) -> list:
    """
    Analyzes failed login attempts and flags suspicious IPs.
    """
    ips = extract_failed_login_ips(log_text)
    ip_counts = Counter(ips)

    flagged_ips = []

    for ip, count in ip_counts.items():
        if count >= THRESHOLD:
            flagged_ips.append({
                "ip": ip,
                "failed_attempts": count,
                "timestamp": datetime.now().isoformat()
            })

    return flagged_ips
