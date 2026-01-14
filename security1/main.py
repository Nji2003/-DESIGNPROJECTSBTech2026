# from log_reader import read_log_file
# from ip_analyzer import analyze_ips
# from report_generator import generate_json_report, generate_html_report

# LOG_FILE = "auth.log"

# def main():
#     log_data = read_log_file(LOG_FILE)
#     flagged_ips = analyze_ips(log_data)

#     if flagged_ips:
#         generate_json_report(flagged_ips)
#         generate_html_report(flagged_ips)
#         print("Suspicious IPs detected and reports generated.")
#     else:
#         print("No suspicious activity detected.")

# if __name__ == "__main__":
#     main()
from pathlib import Path
from log_reader import read_log_file
from ip_analyzer import analyze_ips
from report_generator import generate_json_report, generate_html_report

BASE_DIR = Path(__file__).parent
LOG_FILE = BASE_DIR / "logs" / "auth.log"

def main():
    print("📂 Working directory:", BASE_DIR)
    print("📄 Looking for log file at:", LOG_FILE)

    log_data = read_log_file(LOG_FILE)
    flagged_ips = analyze_ips(log_data)

    if flagged_ips:
        generate_json_report(flagged_ips)
        generate_html_report(flagged_ips)
        print("✅ Suspicious IPs detected and reports generated.")
    else:
        print("ℹ️ No suspicious activity detected.")

if __name__ == "__main__":
    main()
