"""
parser.py
- Loads flagged_ips.json
- Applies detection logic (flag IPs with attempts >= 5)
- Designed to be simple and testable with pytest
"""

import json
from typing import List, Dict


def load_ips(filename: str = "flagged_ips.json") -> List[Dict]:
    """
    Load the JSON file containing IP entries.
    Each entry should look like: {"ip": str, "attempts": int, "status": "ok"|"flagged"}

    Returns:
        List[Dict]: A list of IP entries.
    Raises:
        FileNotFoundError: If the JSON file is not found.
        json.JSONDecodeError: If JSON is invalid.
    """
    with open(filename, "r", encoding="utf-8") as f:
        data = json.load(f)

    # Basic validation to ensure data integrity
    if not isinstance(data, list):
        raise ValueError("JSON root must be a list")

    for entry in data:
        if "ip" not in entry or "attempts" not in entry:
            raise ValueError("Each entry must contain 'ip' and 'attempts'")
        if not isinstance(entry["ip"], str):
            raise ValueError("'ip' must be a string")
        if not isinstance(entry["attempts"], int):
            raise ValueError("'attempts' must be an integer")
        # Normalize status: derive if missing
        if "status" not in entry:
            entry["status"] = "flagged" if entry["attempts"] >= 5 else "ok"

    return data


def detect_flagged(ips: List[Dict]) -> List[Dict]:
    """
    Filter the list to only entries flagged by the rule:
    attempts >= 5 => flagged

    Returns:
        List[Dict]: Flagged entries only.
    """
    return [ip for ip in ips if ip.get("attempts", 0) >= 5]