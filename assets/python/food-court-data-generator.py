def rround(x, base=5):
    return int(base * round(float(x)/base))

data = [{'chain' : 'McDonald\'s', 'name': 'Big Mac', 'type': 'main', 'calories': 2259}]
data_increments = 50
data_max = rround(max([x['calories'] for x in data]), data_increments)

chains = set(k['chain'] for k in data)

data_ordered = {k: {k: [] for k in range(0, data_max + data_increments, data_increments)} for k in chains}
for entry in data:
    data_ordered[entry['chain']][rround(entry['calories'], data_increments)] += [entry]

with open('html.txt', 'w', encoding='utf-8') as f:
    f.write('<div class="super-container">' + '\n')
    for chain in sorted(chains):
        f.write('  <div class="container">' + '\n')
        f.write('    <p>{}</p>'.format(chain) + '\n')

        for i in range(0, data_max + data_increments, data_increments):
            f.write('    <div class="vertical-container">' + '\n')
            if len(data_ordered[chain][i]) == 0:
                f.write('      <div class="square spacer"></div>' + '\n')
            else:
                for entry in data_ordered[chain][i]:
                    f.write('      <div title="{} - {}kJ" class="square {}"></div>\n'.format(entry['name'], entry['calories'], entry['type']))
            f.write('    </div>' + '\n')
        f.write('  </div>' + '\n')
    f.write('</div>')
