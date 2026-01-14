from log_reader import read_log_file
from ip_analyzer import analyze_ips

def test_detection_pipeline():
    log_data = read_log_file("logs/auth.log")
    flagged = analyze_ips(log_data)

    assert len(flagged) == 1
    assert flagged[0]["ip"] == "192.168.1.10"
    assert flagged[0]["failed_attempts"] >= 5
