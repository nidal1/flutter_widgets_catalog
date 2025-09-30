import 'package:flutter/material.dart';

class SliverListExample extends StatelessWidget {
  const SliverListExample({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: CustomScrollView(
        slivers: <Widget>[
          SliverList(
            delegate: SliverChildBuilderDelegate((
              BuildContext context,
              int index,
            ) {
              return ListTile(
                tileColor: index.isEven ? Colors.amber : Colors.blue,
                title: Text('Item #$index'),
              );
            }, childCount: 50),
          ),
        ],
      ),
    );
  }
}
