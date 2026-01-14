"""
test_parser.py
Pytest unit tests for parser.py
Covers:
- Valid IP parsing
- Detection rule triggers at >=5 attempts
- JSON output correctness
- Multiple IPs detection
"""

import json
import os
import pytest
from parser import load_ips, detect_flagged


def test_load_ips_valid_structure():
    """Parser returns a list and enforces required keys/types."""
    data = load_ips("flagged_ips.json")
    assert isinstance(data, list)
    assert len(data) > 0
    first = data[0]
    assert "ip" in first and isinstance(first["ip"], str)
    assert "attempts" in first and isinstance(first["attempts"], int)


def test_detection_rule_triggers_at_5():
    """Detection rule triggers when attempts >= 5."""
    sample = [
        {"ip": "1.2.3.4", "attempts": 4, "status": "ok"},
        {"ip": "5.6.7.8", "attempts": 5, "status": "flagged"},
        {"ip": "9.9.9.9", "attempts": 6, "status": "flagged"},
    ]
    flagged = detect_flagged(sample)
    ips = [e["ip"] for e in flagged]
    assert "5.6.7.8" in ips
    assert "9.9.9.9" in ips
    assert "1.2.3.4" not in ips


def test_json_output_correctness_values():
    """All entries have valid types and status is either 'ok' or 'flagged'."""
    data = load_ips("flagged_ips.json")
    for entry in data:
        assert isinstance(entry["ip"], str)
        assert isinstance(entry["attempts"], int)
        assert entry["status"] in ("ok", "flagged")


def test_multiple_ips_detection_order_irrelevant():
    """Detect multiple flagged IPs irrespective of ordering."""
    sample = [
        {"ip": "2.2.2.2", "attempts": 6, "status": "flagged"},
        {"ip": "1.1.1.1", "attempts": 2, "status": "ok"},
        {"ip": "3.3.3.3", "attempts": 5, "status": "flagged"},
    ]
    flagged = detect_flagged(sample)
    flagged_ips = sorted([e["ip"] for e in flagged])
    assert flagged_ips == ["2.2.2.2", "3.3.3.3"]


def test_load_ips_raises_on_missing_file(tmp_path):
    """Ensure load_ips raises FileNotFoundError when file is missing."""
    missing = tmp_path / "no_such.json"
    with pytest.raises(FileNotFoundError):
        load_ips(str(missing))