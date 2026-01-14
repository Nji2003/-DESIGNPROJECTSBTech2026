import json
from pathlib import Path

OUTPUT_JSON = Path("output/flagged_ips.json")
OUTPUT_HTML = Path("ui/flagged_ips.html")

def generate_json_report(flagged_ips: list):
    """
    Writes flagged IPs to a JSON file.
    """
    OUTPUT_JSON.parent.mkdir(exist_ok=True)
    with open(OUTPUT_JSON, "w") as file:
        json.dump(flagged_ips, file, indent=4)

def generate_html_report(flagged_ips: list):
    """
    Generates an HTML table showing flagged IPs.
    """
    OUTPUT_HTML.parent.mkdir(exist_ok=True)

    rows = ""
    for ip in flagged_ips:
        rows += f"""
        <tr>
            <td>{ip['ip']}</td>
            <td>{ip['failed_attempts']}</td>
            <td>{ip['timestamp']}</td>
        </tr>
        """

    html = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <title>Suspicious IP Report</title>
        <style>
            table {{ border-collapse: collapse; width: 70%; }}
            th, td {{ border: 1px solid black; padding: 8px; }}
            th {{ background-color: #c62828; color: white; }}
        </style>
    </head>
    <body>
        <h2>Flagged IP Addresses</h2>
        <table>
            <tr>
                <th>IP Address</th>
                <th>Failed Attempts</th>
                <th>Timestamp</th>
            </tr>
            {rows}
        </table>
    </body>
    </html>
    """

    with open(OUTPUT_HTML, "w") as file:
        file.write(html)
